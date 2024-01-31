export class ApiClient {
  private static baseUrl = "https://api.spacexdata.com/v4";

  static buildUrl(endpoint: string) {
    return this.baseUrl + endpoint;
  }

  static async fetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(this.buildUrl(endpoint));

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.json();
  }
}
