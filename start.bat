@set /a num=%random% %%4000 +4000
cls && npm i && @ng serve --port %num% -sm true -o