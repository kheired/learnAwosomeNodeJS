var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout;
var stats = [];
// 为每一个异步操作预先定义一个函数

fs.readdir(process.cwd(), function(err, files) {
  console.log('');
  if(!files.length) {
    return console.log('    \033[31m No files to show! \022[39m\n');

  }
  console.log('    Select witch file or directory you want to see: \n');
  file(0);



// called for each file walked in the directory
  function file(i) {
    var filename = files[Number(i)];
    fs.stat(__dirname + '/' + filename, function(err, stat) {
      if(err) {
        return console.error(err);

      }
      stats[i] = stat;
      if(stat.isDirectory()) {
        console.log('    ' + i + '    \033[36m' + filename + '\033[39m');

      } else {
        console.log('    ' + i + '    \033[90m' + filename + '\033[39m');

      }

      if(++i === files.length) {
        read();
      } else {
        file(i);
      }
    })
  }

// read user input when files are shown
  function read() {
    console.log('');
    stdout.write('   \033[33m Enter your chioce： \033[39m');
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', option);
  }

// called with the option supplied by the user
  function option(data) {
    console.log('your choice: ', data);

    var filename = files[Number(data)];
    var filepath = __dirname + '/' + filename;
    if(!filename) {
      stdout.write('    \033[31m Enter your choice! \033[39m');

    } else {
      stdin.pause();
      if(stats[Number(data)].isDirectory()) {
        fs.readdir(filepath, function(err, files) {
          console.log('');
          console.log('   （' + files.length + ' files）');
          files.forEach(function(file) {
            console.log('   -  ' + file);

          });
          console.log('');

        })
      } else {
        fs.readFile(filepath, 'utf8', function(err, data) {
          console.log('');
          console.log('\033[90m' + data + '\033[39m');

        });
      }

    }
  }

});
