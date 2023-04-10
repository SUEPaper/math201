
dir=$(pwd)

lecture_dir=$dir/../math201-lecture

if [ ! -d "$lecture_dir" ]; then
  echo "$lecture_dir doesn't exist."
  echo "Please git clone math201-lecture, and put this path: $lecture_dir"
  exit 1
fi

python01_dir=$lecture_dir/01_Python_Introduction
python02_dir=$lecture_dir/02_Python_Basic
python03_dir=$lecture_dir/03_Python_Function
python04_dir=$lecture_dir/04_Python_Data_Abstraction
numpy_dir=$lecture_dir/05_NumPy_Basic
matplotlib_dir=$lecture_dir/06_Matplotlib_Basic

slides_dir=$dir/static/slides

if [ ! -d "$slides_dir" ]; then
  mkdir -p $slides_dir
fi


build_copy() {
  math201_dir="$1"
  local_dir="$2"
  name="$3"

  if [ -d "$local_dir" ]; then
    cd $local_dir
    bash ./build.sh
    echo "Finished build $name !!!"
    cd $math201_dir
  fi
}

build_copy $dir $python01_dir "python01"
build_copy $dir $python02_dir "python02"
build_copy $dir $python03_dir "python03"
build_copy $dir $python04_dir "python04"
build_copy $dir $numpy_dir "numpy"
build_copy $dir $matplotlib_dir "matplotlib"

