export const workNavs = ['Todos', 'Web', 'App']

enum WorkCategory {
   WEB = 'web',
   APP = 'app',
}

export interface workImagesProps {
   id: number
   img: string
   name: string
   category: string
}
