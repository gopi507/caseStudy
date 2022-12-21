import axios from'axios'
const BOOK_FLIGHT_URL ='http://localhost:8082/user/book/add';
const BOOK_USER_LIST_URL ='http://localhost:8082/user/getAll' ;

class BookService{
    bookFlight(UserDetails){
        return axios.post(BOOK_FLIGHT_URL ,UserDetails)
    }
    getAllUserList(){
        return axios.get(BOOK_USER_LIST_URL)
    }

}
export default new BookService();