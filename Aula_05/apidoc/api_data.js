define({ "api": [
  {
    "type": "get",
    "url": "/tasks",
    "title": "List all tasks",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Task's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tasks.done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "    HTTP/1.1 200 OK\n    [{\n     \"id\": 1,\n     \"title\": \"Study\",\n     \"done\": false,\n     \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n     \"createt_at\": \"2016-02-10T15:46:51.778Z\"\n     }]\nHTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/api/todo/todoService.js",
    "groupTitle": "Tasks",
    "name": "GetTasks"
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Change a tasks",
    "group": "Tasks",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n \"title\": \"Study\",\n \"done\": true\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/api/todo/todoService.js",
    "groupTitle": "Tasks",
    "name": "PutTasksId"
  }
] });
