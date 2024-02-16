let minutes = 46;

if (!(minutes >=0 && minutes <=59)) 
{
    console.log("Введите згачение от 0 до 59");
}
  else if (minutes >= 0 && minutes <= 14)
{
    console.log(`${minutes} минут - это первая половина часа`);
}
  else if (minutes >= 15 && minutes >= 30) 
{
    console.log(`${minutes} минут - это вторая четверть часа`);
}
else if (minutes >= 30 && minutes >= 45) 
{
    console.log(`${minutes} минут - это третья четверть часа`);
}
else if (minutes >= 46 && minutes >= 59) 
{
    console.log(`${minutes} минут - это четвертая четверть часа`);
}