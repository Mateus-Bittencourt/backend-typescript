import GetRequest from "../dtos/get.request";

export default class WelcomeHelper {
  static welcomeMessage(input: GetRequest): string {
    let message = "Welcome ";

    if (input.name) message += input.name;
    else message += "Guest";

    if (input.age) {
      const isAdult = input.age >= 18;
      console.log (input.age)
      message += isAdult ? ", you are an adult" : ", you are not an adult";
    } else message += ", I don't know your age";
    return message;
  }
}
