#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
  if len(array) >= min_size:
    return array
  while len(array) < min_size:
    array.append(value)
  return array