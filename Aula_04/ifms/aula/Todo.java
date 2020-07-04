package ifms.aula;
import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "todos")
public class Todo {
	

	@Id
		private String id;

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		// --------------------------------------------------
		
		private String description;

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		// ----------------------------------------------------

		private Date createdAt = new Date();

		public Date getCreatedAt(){
			return createdAt;
		}

		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}


		// ----------------------------------------------------

		private boolean done = false;

		public boolean isDone() {
			return done;
		}

		public void setDone(boolean done) {
			this.done = done;
		}
}
	

	