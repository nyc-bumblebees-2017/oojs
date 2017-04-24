class Dog

  def initialize(args={})
    @name = args.fetch("name", "Sally")
    @age = args.fetch("age", "0")
    @breed = args.fetch("breed", "Dalmation")
  end

  def bark
    puts "bark"
  end
end

puts dog = Dog.new(name: "hello")

dog.bark