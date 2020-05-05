function takeANumber(num_lines) {
  num_lines.push(num_lines.length + 1)
  return `You are ticket number ${num_lines[num_lines.length]}.`
}

function nowServing(current_line) {
  if (current_line.length > 0) {
    return `Currently serving ${current_line.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(current_line) {
  let arr = []

  if (current_line.length > 0) {
    for (let i = 0; i < current_line.length; i++) {
      arr.push(` ${i+1}. ${current_line[i]}`)
    }
    return "The line is currently:" + arr.join()
  }
  return "The line is currently empty."
}