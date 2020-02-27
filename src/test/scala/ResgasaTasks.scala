import io.gatling.core.Predef.{constantUsersPerSec, global, scenario, _}
import io.gatling.http.Predef.{http, status, _}

import scala.concurrent.duration._

object ResgasaTasks{

  // http://ws.resgasa.com.ec:90/token
  val getTokenTask = exec(
    http("ResgasaToken")
      .post("/token")
      .formParam("grant_type", "password")
      .formParam("username", "user")
      .formParam("password", "user")
      .header("Content-Type", "application/json")
      .asJson
      .check(status is 200)
      .check(jsonPath("$.access_token").saveAs("tokenId"))
      .check(jsonPath("$.token_type").saveAs("tokenType"))
  )

  // http://ws.resgasa.com.ec:90/odata/Pedido
  val pedidoTask = exec(
    http("Pedido")
      .post("/odata/Pedido")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
        s"""{
           |    "CardCode": "$${CardCode}",
           |    "DocDate": "$${DocDate}",
           |    "DocDueDate": "$${DocDueDate}",
           |    "TaxDate": "$${TaxDate}",
           |    "U_RSG_TIPOVTA": "$${U_RSG_TIPOVTA}",
           |    "U_RSG_CODVEN_EXT": "$${U_RSG_CODVEN_EXT}",
           |    "Comments": "$${Comments}",
           |    "NumAtCard": "$${NumAtCard}",
           |    "ImportFileNum": "$${ImportFileNum}",
           |    "DocumentLines": [
           |        {
           |            "ItemCode": "$${ItemCode1}",
           |            "Quantity": "$${Quantity1}",
           |            "CostingCode" : "$${CostingCode1}",
           |            "U_RSG_RUTA": "$${U_RSG_RUTA1}",
           |            "Address": "$${Address1}"
           |        },
           |        {
           |            "ItemCode": "$${ItemCode2}",
           |            "Quantity": "$${Quantity2}",
           |            "CostingCode" : "$${CostingCode2}",
           |            "U_RSG_RUTA": "$${U_RSG_RUTA2}",
           |            "Address": "$${Address2}"
           |        },
           |        {
           |            "ItemCode": "$${ItemCode3}",
           |            "Quantity": "$${Quantity3}",
           |            "CostingCode" : "$${CostingCode3}",
           |            "U_RSG_RUTA": "$${U_RSG_RUTA3}",
           |            "Address": "$${Address3}"
           |        },
           |        {
           |            "ItemCode": "$${ItemCode4}",
           |            "Quantity": "$${Quantity4}",
           |            "CostingCode" : "$${CostingCode4}",
           |            "U_RSG_RUTA": "$${U_RSG_RUTA4}",
           |            "Address": "$${Address4}"
           |        },
           |        {
           |            "ItemCode": "$${ItemCode5}",
           |            "Quantity": "$${Quantity5}",
           |            "CostingCode" : "$${CostingCode5}",
           |            "U_RSG_RUTA": "$${U_RSG_RUTA5}",
           |            "Address": "$${Address5}"
           |        }
           |    ]
           |}""".stripMargin))
      .asJson
      .check(status is 200)
      .check(bodyString.saveAs("nuevo_pedido_test"))
  )
    .exec((session: Session) => {
      println("============ Nuevo Pedido ============")
      println(session)
      println("============ Respuesta Pedido ============")
      println(session("nuevo_pedido_test").as[String])
      session
    })

  // http://ws.resgasa.com.ec:90/odata/Factura
  val facturaTask = exec(
    http("Factura")
      .post("/odata/Factura")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
        s"""{
           |    "CardCode": "$${CardCode}",
           |    "DocDate": "$${DocDate}",
           |    "U_HBT_GuiaPadre": $${U_HBT_GuiaPadre},
           |    "Comments": "$${Comments}",
           |    "DocumentLines": [
           |        {
           |            "ItemCode": "$${ItemCode1}",
           |            "Quantity": "$${Quantity1}",
           |            "WarehouseCode": "$${WarehouseCode1}"
           |        },
           |        {
           |            "ItemCode": "$${ItemCode2}",
           |            "Quantity": "$${Quantity2}",
           |            "WarehouseCode": "$${WarehouseCode2}"
           |        },
           |        {
           |            "ItemCode": "$${ItemCode3}",
           |            "Quantity": "$${Quantity3}",
           |            "WarehouseCode": "$${WarehouseCode3}"
           |        }
           |
           |    ]
           |}""".stripMargin))
      .asJson
      .check(status is 200)
      .check(bodyString.saveAs("nueva_factura"))
  )
    .exec((session: Session) => {
      println("============ Nueva Factura ============")
      println(session)
      println("============ Respuesta Factura ============")
      println(session("nueva_factura").as[String])
      session
    })

  // http://ws.resgasa.com.ec:90/odata/Retorno
  val retornoTask = exec(
    http("Retorno")
      .post("/odata/Retorno")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
        s"""{
           |   "U_GuiaPadre" : "$${GuiaPadre}",
           |   "Lineas" : [
           |      {
           |         "U_CantEntregada" : $${U_CantEntregada},
           |         "U_TipoDoc" : $${U_TipoDoc},
           |         "U_DocEntry" : $${U_DocEntry},
           |         "U_LineNum" : $${U_LineNum},
           |         "U_ItemCode" : "$${ItemCode}"
           |      }
           |   ]
           |}""".stripMargin
      ))
      .asJson
      .check(status is 200)
      .check(bodyString.saveAs("nuevo_retorno"))
  )
    .exec((session: Session) => {
      println("============ Nuevo Retorno ============")
      println(session)
      println("============ Respuesta Retorno ============")
      println(session("nuevo_retorno").as[String])
      session
    })

  // http://ws.resgasa.com.ec:90/odata/Retorno('826')/WebApi.ActualizarEstadoAutorizacion
  val retorno826Task = exec(
    http("Retorno826")
      .post("/odata/Retorno('826')/WebApi.ActualizarEstadoAutorizacion")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(session =>
        s"""{"U_EstadoAutorizacion":"Autorizado"}"""
      ))
      .asJson
      .check(status is 200)
  )

  // http://ws.resgasa.com.ec:90/odata/Retorno('0000000038')
  val retornoPatchTask = exec(
    http("Retorno826")
      .patch(s"/odata/Retorno('0000000038')")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(session =>
        s"""{
           |  "Lineas":
           |  [
           |  ]
           |}""".stripMargin
      ))
      .asJson
      .check(status is 200)
  )

  // http://ws.resgasa.com.ec:90/odata/Devolucion
  val devolucionTask = exec(
    http("Devolucion")
      .post("/odata/Devolucion")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
        s"""
           |{
           |    "CardCode": "$${CardCode}",
           |    "U_RSG_RUTA": "$${U_RSG_RUTA}",
           |  "U_RSG_MOTDEV": "$${U_RSG_MOTDEV}",
           |  "U_HBT_GuiaPadre":$${U_HBT_GuiaPadre},
           |  "ShipToCode": "$${ShipToCode}",
           |  "U_RSG_CHOFER": "$${U_RSG_CHOFER}",
           |  "Comments": "$${Comments}",
           |    "DocumentLines": [
           |        {
           |            "ItemCode": "$${ItemCode}",
           |            "Quantity": "$${Quantity}"
           |        }
           |
           |    ]
           |}""".stripMargin
      ))
      .asJson
      .check(status is  200)
      .check(bodyString.saveAs("nueva_devolucion"))
  )
    .exec((session: Session) => {
      println("============ Nueva Devolucion ============")
      println(session)
      println("============ Respuesta Devolucion ============")
      println(session("nueva_devolucion").as[String])
      session
    })

  //http://ws.resgasa.com.ec:90/odata/EntradaMercancia
  val entradaMercanciaTask = exec(
    http("EntradaMercancia")
      .post("/odata/EntradaMercancia")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
        s"""
           |{
           |    "CardCode": "$${CardCode}",
           |    "U_HBT_GuiaPadre": $${U_HBT_GuiaPadre},
           |    "DocumentLines": [
           |        {
           |            "ItemCode": "$${ItemCode}",
           |            "Quantity": "$${Quantity}",
           |            "UnitPrice": "$${UnitPrice}",
           |            "WarehouseCode": "$${WarehouseCode}"
           |        }
           |    ]
           |}""".stripMargin
      ))
      .asJson
      .check(status is  200)
      .check(bodyString.saveAs("nueva_entrada_mercancia"))
  )
    .exec((session: Session) => {
      println("============ Nueva Entrada Mercancia ============")
      println(session)
      println("============ Respuesta Entrada Mercaderia ============")
      println(session("nueva_entrada_mercancia").as[String])
      session
    })

  // http://ws.resgasa.com.ec:90/odata/Entrega
  val entregaTask = exec(
    http("Entrega")
      .post("/odata/Entrega")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
      s"""{
        |    "CardCode": "$${CardCode}",
        |    "ShipToCode": "$${ShipToCode}",
        |  "U_RSG_MOTDEV": "$${U_RSG_MOTDEV}",
        |  "U_HBT_GuiaPadre":$${U_HBT_GuiaPadre},
        |  "Comments":"$${Comments}",
        |    "DocumentLines": [
        |        {
        |            "ItemCode": "$${ItemCode}",
        |            "Quantity": "$${Quantity}"
        |        }
        |    ]
        |} """.stripMargin
      ))
      .asJson
      .check(status is  200)
      .check(bodyString.saveAs("nueva_entrega"))
  )
    .exec((session: Session) => {
      println("============ Nueva Entrega ============")
      println(session)
      println("============ Respuesta Entrega ============")
      println(session("nueva_entrega").as[String])
      session
    })

  // http://ws.resgasa.com.ec:90/odata/Empleado(566)
  val empleadoTask = exec(
    http("Empleado")
      .patch(s"/odata/Empleado(566)")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .body(StringBody(
        s"""{
           |  "U_HBT_MacDispositivo": "b4:86:55:48:c2:a6"
           |}""".stripMargin
      ))
      .asJson
      .check(status is  200)
  )

  // http://ws.resgasa.com.ec:90/odata/ConsultarInformacion(NombreVista= 'ConsultarPoliticaPrecios')
  val consultarInformacionTask = exec(
    http("ConsultarInformacion")
      .get("/odata/ConsultarInformacion(NombreVista= 'ConsultarPoliticaPrecios'")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .asJson
      .check(status is 200)
  )

  // http://ws.resgasa.com.ec:90/odata/ConsultarInformacion(NombreVista= 'ConsultarListaPrecios')
  val consultarListaPreciosTask = exec(
    http("ConsultarListaPrecios")
      .get("/odata/ConsultarInformacion(NombreVista= 'ConsultarListaPrecios')")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .asJson
      .check(status is 200)
  )

  // http://ws.resgasa.com.ec:90/odata/ConsultarInformacion(NombreVista= 'ConsultarDistribuidores')?$filter=contains(Direcciones/U_RSG_RUTA, '11')
  val  consultarDistribuidoresTask = exec(
    http("ConsultarDistribuidores")
      .get("/odata/ConsultarInformacion(NombreVista= 'ConsultarDistribuidores')?$filter=contains(Direcciones/U_RSG_RUTA, '11'")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .asJson
      .check(status is 200)
  )

  // http://ws.resgasa.com.ec:90/odata/ConsultarInformacion(NombreVista= 'ConsultarCliente')
  val consultarClienteTask = exec(
    http("ConsultarCliente")
      .get("/odata/ConsultarInformacion(NombreVista= 'ConsultarCliente')?filters=[{\"Name\":\"CardCode\",\"Value\":\"1328\"}] & filtersRuta= [{\"Name\":\"U_RSG_RUTA\",\"Value\":\"R34\"}]")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .asJson
      .check(status is 200)
  )

  //http://ws.resgasa.com.ec:90/odata/ConsultarInformacion(NombreVista= 'ConsultarBodegas')
  val consultarBodegasTask = exec(
    http("ConsultarBodegas")
      .get("/odata/ConsultarInformacion(NombreVista= 'ConsultarBodegas'")
      .header("Content-Type", "application/json")
      .header("Authorization", "${tokenType} ${tokenId}")
      .asJson
      .check(status is 200)
  )

}
