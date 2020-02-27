
import io.gatling.core.Predef.{constantUsersPerSec, global, scenario, _}
import io.gatling.http.Predef.{http, status, _}

import scala.concurrent.duration._
import scala.sys.SystemProperties


class ResgasaSimulation extends Simulation {

  val systemProperties = new SystemProperties

  def getAsIntOrElse(property: String, default: Int): Int = {
    systemProperties.getOrElse(property, default).toString.toInt
  }

  def getAsStringOrElse(property: String, default: String): String = {
    systemProperties.getOrElse(property, default)
  }

  def getAsBooleanOrElse(property: String, default: Boolean): Boolean = {
    systemProperties.getOrElse(property, default).toString().toBoolean
  }

  def getAsDoubleOrElse(property: String, default: Double): Double = {
    systemProperties.getOrElse(property, default).toString().toDouble
  }
  var pedNum = 0
  var facNum = 0
  val scenarioName = "ResgasaSimulation"
  val baseUrl = getAsStringOrElse("baseUrl", "http://ws.resgasa.com.ec:89")
  val httpProtocol = http.baseUrl(baseUrl)
  val employeeId = "0000030"
  val csvDevolucionFeeder = csv("data/Devolucion.csv").eager.random
  val csvEntregaMercanciaFeeder = csv("data/EntradaMercancia.csv").eager.random
  val csvEntregaFeeder = csv("data/EntregaCltEsp.csv").eager.random
  val csvFacturaFeeder = csv("data/Factura20200212.csv").eager.random
  val csvPedidoFeeder = csv("data/Pedido2.csv").eager.random
  val csvRetornoFeeder = csv("data/wsentregas.csv").eager.random

  def getToken() = {
    repeat(1){
      ResgasaTasks.getTokenTask
    }
  }

  def getFactura() = {
    repeat(20){
      feed(csvFacturaFeeder)
        .exec(
          ResgasaTasks.facturaTask
        )
        .pause(1)
    }
  }

  def getEntrega() = {
    repeat(100){
      feed(csvEntregaFeeder)
        .exec(
          ResgasaTasks.entregaTask
        )
        .pause(1)
    }
  }

  def getDevolucion() = {
    repeat(2){
      feed(csvDevolucionFeeder)
        .exec(
          ResgasaTasks.devolucionTask
        )
        .pause(1)
    }
  }

  def getEntradaMercanciaTask() = {
    repeat(20){
      feed(csvEntregaMercanciaFeeder)
        .exec(
          ResgasaTasks.entradaMercanciaTask
        )
        .pause(1)
    }
  }

  def getPedido() = {
    repeat(10){
      feed(csvPedidoFeeder)
        .exec(
          ResgasaTasks.pedidoTask
        )
        .pause(1)
    }
  }

  def getRetorno() = {
    repeat(1){
      feed(csvRetornoFeeder)
        .exec(
          ResgasaTasks.retornoTask
        )
        .pause(1)
    }
  }
  val scnPedido = scenario("Pedido")
    .exec(
      getToken(),
      getPedido()
    )

  val scnRetorno = scenario("Retorno")
    .exec(
      getToken(),
      getRetorno()
    )

  val scnFacturas = scenario("Facturas")
    .exec(
      getToken(),
      getFactura()
    )

  val scnDevoluciones = scenario("Devoluciones")
    .exec(
      getToken(),
      getDevolucion()
    )

  val scnEntregas = scenario("Entregas")
    .exec(
      getToken(),
      getEntrega()
    )

  val scnToken = scenario("token")
    .exec(
      getToken()
    )


  setUp(
    //scnToken.inject(atOnceUsers(300)),
    //scnFacturas.inject(atOnceUsers(20))
    //scnPedido.inject(atOnceUsers(10))
    //scnRetorno.inject(atOnceUsers(1))
    scnEntregas.inject(atOnceUsers(10))
    //scnDevoluciones.inject(atOnceUsers(100))
  ).protocols(httpProtocol)
// constantUsersPerSec(rate) during(duration) randomized
//splitUsers(100) into(rampUsers(5) over(10 seconds)) separatedBy atOnceUsers(5)
}

