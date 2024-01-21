from typing import Union
import random 
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

app = FastAPI()

words = ['python', 'java', 'kotlin', 'javascript']
CHOSENWORD = None
wrongCount = 0
answer = None
ANSWER = None

@app.get("/start") 
def start_hangman():
    global CHOSENWORD
    global ANSWER
    global answer

    CHOSENWORD = list(words[random.randint(0, len(words)-1)])
    answer = "_" * (len("".join(CHOSENWORD))) 
    ANSWER = list(answer)
    return ' '.join(ANSWER)

# res = start_hangman()
# print(res)

# while True:
#     ch = input()
#     if ch != "":
#         print(hangman(ch))
#     if wrongCount > 6:
#         print("You are hanged!")
#         break
#     if ANSWER == CHOSENWORD:
#         print ("Congratulations!")
#         break

@app.get("/guess")
def hangman(q : str):
    global CHOSENWORD
    global answer 
    global ANSWER
    global wrongCount

    count = 0
    right = 0
    while count < len(CHOSENWORD):
        if q == CHOSENWORD[count]:
            ANSWER[count] = q
            right += 1
        count += 1
    if right == 0:
        wrongCount += 1
        print (str(wrongCount) + " wrong guesses!")

    answer = ' '.join(ANSWER)

    return answer

# localhost:3001/
@app.get("/")
def read_root():
    return {"Hello": "World"}

# localhost:3001/items/5?q=hello
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    print('read_item', item_id, q)
    return {"item_id": item_id, "q": q}

@app.post("/items")  # item = {"name": "Foo", "price": 42.0}
def create_item(item: Item):
    return {"name": item.name, "price":item.price}
