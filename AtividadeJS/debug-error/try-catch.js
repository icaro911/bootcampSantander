
//do with try an catch
//filter callbacks of catch for every type of error using an operator 'instanceof'
// if don't have parameters = referenceError
// if arr isn't an 'object' or a isn't a number = typeError
// if arr.lenght !== a = rangeError

function teste(arr,a){
    try{
      if(!arr || !a) throw new ReferenceError('erro de referencia');

      if(typeof arr !== 'object' || typeof a !== 'number') throw new TypeError('erro de tipo'); //tinha errado aqui

      if(arr.length !== a) throw new RangeError('erro de tamanho');

      return arr ;

    }catch(e){
          if(e instanceof ReferenceError){console.log(ReferenceError.name);
          }else if( e instanceof TypeError){console.log(TypeError.name);
          }else if(e instanceof RangeError){console.log(RangeError.name);
          }else{
            console.log('outro tipo de erro');
          }

        }}

teste([1,2],2);
teste('a',2);
teste([1,2],'a');
teste([1,2],1);
