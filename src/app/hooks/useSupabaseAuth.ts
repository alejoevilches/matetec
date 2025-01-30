import { useState } from 'react';
import { auth, TUserLogin } from "@/utils/auth";

export function useSupabaseAuth() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async ({email, password}: TUserLogin) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await auth({email, password});
      return data;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
      return null;  
    } finally {
      setIsLoading(false);
    }
  }

  return { signIn, error, isLoading };
}