import io.gatling.core.Predef.{constantUsersPerSec, global, scenario, _}
import io.gatling.http.Predef.{http, status, _}

import scala.concurrent.duration._

object Pedido{
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

  val csvPedidoFeeder = csv("data/Pedido2.csv").eager.random
  def getPedido() = {
    repeat(10){
      feed(csvPedidoFeeder)
        .exec(
          ResgasaTasks.pedidoTask
        )
        .pause(1)
    }
  }

  val scnPedido = scenario("Pedido")
    .exec(
      getToken(),
      getPedido()
    )
}

