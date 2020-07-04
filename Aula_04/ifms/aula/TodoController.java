package ifms.aula;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/javatodos")
public class TodoController {

	@Autowired
	private TodoService todoService;

	@CrossOrigin
	@GetMapping(value = "/")
	public List<Todo> getAll() {
		return todoService.findAll();
	}

	@CrossOrigin
	@PostMapping(value = "/")
	public ResponseEntity<?> saveOrUpdate(@RequestBody Todo todo) {
		todoService.saveOrUpdate(todo);
		return new ResponseEntity<>("sucessfully", HttpStatus.OK);
	}


	// ---------------------------Exemplo de base do delete--------------
	//  @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    // public ResponseEntity<User> deleteUser(@PathVariable("id") long id) {
    //     //Busca um usuário por id(passado por parâmetro)
    //     User user = userService.findById(id);
    //     if (user == null) {
    //         return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
    //     }
    //     //Deleta o usuário
    //     userService.deleteUser(user);
    //     return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    // }

	@CrossOrigin
	@DeleteMapping(value = "/{id}")
	public void deleteUser(@PathVariable String id) {
		todoService.deleteUser(id);
	}

// ---------------------------------Exemplo como base do update ------------------------
	//  @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    // public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {  
    //     //busca um usuário por id(Parametro passado pro método updateUser)      
    //     User currentUser = userService.findById(id);  
    //     if (currentUser==null) {
    //         return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
    //     }
    //     currentUser.setName(user.getName());
    //     currentUser.setAge(user.getAge());
    //     currentUser.setSalary(user.getSalary());
    //     //Faz o update do usuário no banco
    //     userService.updateUser(currentUser);
    //     //Retorna o usuário junto com código 200
    //     return new ResponseEntity<User>(currentUser, HttpStatus.OK);
    // }

	@CrossOrigin
	@PutMapping (value = "/{id}")
	public void updateUser (@PathVariable("id") String id, @RequestBody User user){
		todoService.updateUser(id)
	}
}
