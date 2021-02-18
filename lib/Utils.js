const utils = {
    isEmpty: obj =>{
      return Object.keys(obj).length === 0 && obj.constructor === Object;
    },
  
    getAllValuesFrom: (obj) => {
      let firsTime = true
      const subObjects = []
      const values = []
  
      while(subObjects.length || firsTime){
  
        if(firsTime){
          firsTime = false;
        } else {
          obj = subObjects.pop()
        }
  
        for( const key in obj ){
          let value = obj[key]
  
          if(value) {
            if(typeof value === "string" )
              values.push([key, value])
            else
              subObjects.push(value)
          }
        }
      }
  
      return values;
    },

    normalize: str => {
      return str.trim().replace(/_/g, ' ')
    }
  }
  
  export default utils