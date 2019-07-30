import axios from 'axios'

function sendResult(){
    axios.post('http://127.0.0.1:5000/user',
    {
        'name' : 'test',
        'age' : 10
    })
}

async function getIdNum(){
    const res = await axios.get('http://127.0.0.1:5000/getIdNum').then(function(response){
       //console.log(response.data)
       return response
   })
   return res.data
}

export {sendResult, getIdNum}