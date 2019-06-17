"use strict";

// 어플리케이션을 컨트롤하는 모듈
var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

//메인윈도우는 GC안되게 글로벌 변수화
let mainWindow;

// 전체 윈도우가 닫기면 종료
app.on("window-all-closed", function() {
  if (process.platform != "drawin") {
    app.quit();
  }
});

// Electron초기화 완료후에 실행
app.on("ready", function() {
  // メイン画面の表示
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL("file://" + __dirname + "/index.html");

  // 윈도우를 닫으면 어플 종료
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
