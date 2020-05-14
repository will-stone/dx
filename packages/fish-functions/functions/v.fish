function _v_semver_version
  set -l string $argv[1]
  set -l semver (string match -r "\d+\.\d+\.\d+" $string)
  echo $semver
end

function _v_version_entry
  set -l cmd $argv[1]
  set -l arg $argv[2]

  if type -q $cmd
    set -l ver (eval $cmd $arg)
    set -l semver (_v_semver_version $ver)
    printf "$cmd $semver\n"
  end
end

function _v_all_versions
  _v_version_entry "go" "version"
  _v_version_entry "node" "-v"
  _v_version_entry "npm" "-v"
  _v_version_entry "ruby" "-v"
  _v_version_entry "yarn" "-v"
end

function v --description 'Shows versions for commonly installed items'
  _v_all_versions | column -t
end