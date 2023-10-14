// create a loop to create rows (0-9)

for (let i = 0; i < 10; i++) {
  //create a loop to create columns (0-9)
  for (let j = 0; j < 10; j++) {
    process.stdout.write("("+ i + "." + j +")\n")
  }
  
}

