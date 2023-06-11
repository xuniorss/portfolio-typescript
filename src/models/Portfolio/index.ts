export const workNavs = ['Todos', 'Web', 'Clones']
// export const workNavs = ['Todos', 'Web', 'App']

export type workImagesProps = {
   id: number
   img: string
   name: string
   category: 'web' | 'app' | 'clones'
   repoLink: string
   deployUrl?: string | null
}
