from typing import Union

from fastapi import FastAPI

app = FastAPI()


# localhost:3001/
@app.get("/")
def read_root():
    return {"Hello": "World"}

# localhost:3001/items/5?q=hello
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    print('read_item', item_id, q)
    return {"item_id": item_id, "q": q}