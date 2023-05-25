// export const workNavs = ['Todos', 'Web']
export const workNavs = ['Todos', 'Web', 'App']

export type workImagesProps = {
   id: number
   img: string
   name: string
   category: 'web' | 'app'
   repoLink: string
   deployUrl?: string | null
}
