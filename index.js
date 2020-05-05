function takeANumber(num_lines) {
  num_lines.push(num_lines.length + 1)
  return `You are ticket number ${num_lines[num_lines.length - 1]}.`
}

function nowServing(current_line) {
  if (current_line.length > 0) {
    return `Currently serving ticket number ${current_line.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(current_line) {
  if (current_line.length > 0) {
    return "The line is currently:" + arr.join()
  }
  return "The line is currently empty."
}