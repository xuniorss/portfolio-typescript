import { api } from './../api/axios/apiClient'
import { SendEmailProps } from '../../models/Contact'

const sandEmail = async ({
   name,
   lastName,
   contactNumber,
   email,
   message,
}: SendEmailProps): Promise<SendEmailProps> => {
   const { data } = await api.post<SendEmailProps>('/newemail', {
      name,
      lastName,
      contactNumber,
      email,
      message,
   })

   return data
}

export const emailApi = { sandEmail }
