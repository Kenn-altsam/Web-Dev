from models import Animal, Dog, Cat

def main():

    dog = Dog("Buddy", 3, "Golden Retriever")
    cat = Cat("Whiskers", 2, "Orange")

    animals = [dog, cat]

    print("=" * 40)
    print("OBJECT-ORIENTED PROGRAMMING DEMONSTRATION")
    print("=" * 40)

    # polymorphism

    print("\n--- Calling speak() on all animals (Polymorphism) ---")
    for animal in animals:
        print(f"  {animal.speak()}")

    # get_info

    print("\n--- Information about each animal ---")
    for animal in animals:
        print(f"  {animal.get_info()}")

    # unique methods

    print("\n--- Unique behaviors ---")
    print(f"  {dog.fetch()}")
    print(f"  {cat.scratch()}")

    print(f"\n--- Birthday ---")
    print(f"  {dog.celebrate_birthday()}")

    print("\n--- Type checking ---")
    for animal in animals:
        print(f"  {animal.name} is a {type(animal).__name__}")
    
    print("\n" + "=" * 40 + "\n")

if __name__ == "__main__":
    main()