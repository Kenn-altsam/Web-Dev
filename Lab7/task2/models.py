class Animal:

    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def __str__(self):
        return f"(name='{self.name}', age={self.age}, species='{self.species}')"
    
    def speak(self):
        return f"{self.name} makes a sound"
    
    def get_info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"
    
    def celebrate_birthday(self):
        self.age += 1
        return f"{self.name} just turned {self.age} years old!"
    

class Dog(Animal):
    
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def __str__(self):
        return super().__str__()
    
    def speak(self):
        return f"{self.name} barks: Woof! Woof!"
    
    def fetch(self):
        return f"{self.name} is fetching the ball!"
    
    def get_info(self):
        return f"{self.name} is a {self.age}-year-old {self.breed} dog"

class Cat(Animal):

    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def __str__(self):
        return f"Cat(name='{self.name}', age={self.age}, color='{self.color}')"
    
    def speak(self):
        return f"{self.name} meows: Meow! Meow!"
    
    def scratch(self):
        return f"{self.name} is scratching the furniture!"
    
    def get_info(self):
        return f"{self.name} is a {self.age}-year-old {self.color} cat"
    
    
