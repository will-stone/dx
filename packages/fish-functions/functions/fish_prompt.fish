# Colour available commands green instead of white
set fish_color_command green

# Show truncated directory names in prompt
set fish_prompt_pwd_dir_length 0

# Git prompt
set __fish_git_prompt_show_informative_status
set __fish_git_prompt_color_branch brblack
set __fish_git_prompt_color_cleanstate brblack
set __fish_git_prompt_color_dirtystate yellow
set __fish_git_prompt_color_stagedstate green
set __fish_git_prompt_color_upstream cyan

# Git Characters
set __fish_git_prompt_char_dirtystate '+'
set __fish_git_prompt_char_stagedstate '•'
set __fish_git_prompt_char_stateseparator ' '
set __fish_git_prompt_char_upstream_prefix ' '
set __fish_git_prompt_char_cleanstate '' # ✓
set __fish_git_prompt_char_invalidstate '×'
# set __fish_git_prompt_char_upstream_equal ''
# set __fish_git_prompt_char_upstream_ahead '↑'
# set __fish_git_prompt_char_upstream_behind '↓'
# set __fish_git_prompt_char_upstream_diverged '⇅'

function fish_prompt
  # status of last command can change before the end so we store it in this var.
  set -l last_status $status

  printf "\n\n"

  set_color blue
  printf (prompt_pwd)
  set_color normal

  set_color brblack
  __fish_git_prompt " %s"
  set_color normal

  printf "\n"

  if test $last_status -eq 0
    set_color green
    printf "❯ "
    set_color normal
  else
    set_color red
    printf "! "
    set_color normal
  end
end
