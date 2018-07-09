console.log("Hello World")
import("jschannel").then((Channel: any) => {
  // console.log(Channel.build)
})
import("evaporate").then(Evaporate => {
  // console.log(Evaporate)
})
import("a").then((a: any) => {
  console.log(a())
})
