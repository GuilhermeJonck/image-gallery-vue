export const getImages = () => {
    const images = import.meta.glob('@/assets/img/*.{jpg,png,jpeg,gif}')
    const imageArray = []
  
    for (const path in images) {
      imageArray.push({
        src: new URL(path, import.meta.url).href,
        alt: path.split('/').pop()
      })
    }
    //console.log(imageArray)
    return imageArray
  }
