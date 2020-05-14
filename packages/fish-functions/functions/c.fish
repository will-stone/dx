function c --wraps code --description 'Visual Studio Code'
  if count $argv > /dev/null
    command code $argv
  else
    command code .
  end
end