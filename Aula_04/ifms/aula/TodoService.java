package ifms.aula;

import java.util.List;

public interface TodoService {
	List<Todo> findAll();
	void saveOrUpdate(Todo todo);
	void deleteUser(String id);
	void updateUser (String id);

}
