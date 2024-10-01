import GetRequest from "../dtos/get.request";
import GetResponse from "../dtos/get.response";
import WelcomeHelper from "../helpers/welcome.helper";

export default class GetHandler {
  static buildResponse(input: GetRequest): GetResponse {
    const response: GetResponse = {
      message: WelcomeHelper.welcomeMessage(input),
    };
    return response;
  }
}
