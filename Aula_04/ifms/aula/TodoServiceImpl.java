package ifms.aula;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoServiceImpl implements TodoService{

	@Autowired
	private TodoRepository todoRepository;
	
	@Override
	public List<Todo> findAll() {
		
		return todoRepository.findAll();
	}

	@Override
	public void saveOrUpdate(Todo todo) {
		todoRepository.save(todo);
		
	}
	@Override
	public void deleteUser (String id){
		todoRepository.deleteUser(id);
	}

	@Override
	public void updateUser (String id){
		todoRepository.updateUser(id);
	}


}
