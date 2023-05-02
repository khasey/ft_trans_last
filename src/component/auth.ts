export interface User {
    login: string;
    image_url: any;
  }
  
  export async function getUserData(userId: number): Promise<{ login: string, image: string }> {
    const response = await fetch(`https://api.intra.42.fr/v2/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.status} ${response.statusText}`);
    }
    const userData = await response.json();
    return {
      login: userData.login,
      image: userData.image.link,
    };
  }
  
  