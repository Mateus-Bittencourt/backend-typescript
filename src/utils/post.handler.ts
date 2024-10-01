import PostRequest from '../dtos/post.request.js'
import PostResponse from '../dtos/post.response.js'

export default class PostHandler {

  static buildResponse(input: PostRequest): PostResponse {
    const response: PostResponse = {
      id: Math.random().toString(),
      name: input.name,
      age: input.age,
      email: input.email,
      isAdult: input.age >= 18,
      registrationDate: new Date()
    }
    return response;
  }
}
