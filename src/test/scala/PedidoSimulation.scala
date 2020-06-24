
import io.gatling.core.Predef.{constantUsersPerSec, global, scenario, _}
import io.gatling.http.Predef.{http, status, _}

import scala.concurrent.duration._
import scala.sys.SystemProperties


class ResgasaSimulation extends Simulation {

  setUp(
    Pedido.scnGet.inject(atOnceUsers(Constants.numberOfUsers)),
    Pedido.scnSaveAndGet.inject(atOnceUsers(Constants.numberOfUsers))
  )
    .protocols(Constants.httpProtocol)
    .pauses(constantPauses)
    .maxDuration(Constants.duration)
    .assertions(
      global.responseTime.max.lessThan(Constants.responseTimeMs),
      global.successfulRequests.percent.greaterThan(Constants.responseSuccessPercentage)
    )
}

