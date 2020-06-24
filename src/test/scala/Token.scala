import io.gatling.core.Predef.{constantUsersPerSec, global, scenario, _}
import io.gatling.http.Predef.{http, status, _}

import scala.concurrent.duration._

object Token{
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
  val scnToken = Constants.createScenario("token")
    .exec(
      getToken()
    )
}

