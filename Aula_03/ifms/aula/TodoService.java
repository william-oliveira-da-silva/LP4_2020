package ifms.aula;

import java.util.List;

public interface TodoService {
	List<Todo> findAll();
	void saveOrUpdate(Todo t);
	//void deleteTodo(String id);

}
