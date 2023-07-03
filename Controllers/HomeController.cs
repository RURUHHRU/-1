using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Web.data;
using Web.Models;

namespace Web.Controllers
{
    
    public class HomeController : Controller
    {
        //视图名要与控方法名相同
      
        public IActionResult Index()
        {
            return View();
        } 
        [Route("/Home/Index1")]
        public IActionResult Index1()
        {
            return View();
        }

        //主页
        public IActionResult Index4()
        {
          

            return View();
        }
        //病人管理
        [HttpGet("/Home/Index5")]
        public IActionResult Index5()
        {
            return View();
        }

        //医生管理
        [HttpGet("/Home/Index6")]
        public IActionResult Index6()
        {
            return View();
        }

        //报告
        [HttpGet("/Home/Index7")]
        public IActionResult Index7()
        {
            return View();
        }
        //预警
        [HttpGet("/Home/Index8")]
        public IActionResult Index8()
        {
            return View();
        }
        //床位
        [HttpGet("/Home/Index9")]
        public IActionResult Index9()
        {
            return View();
        }
        //库存
        [HttpGet("/Home/Index10")]
        public IActionResult Index10()
        {
            return View();
        }
        //去注册
        [HttpGet("/Home/Index11")]
        public IActionResult Index11()
        {
            return View();
        }
        [HttpGet("/Home/Index13")]
        public IActionResult Index13()
        {
            return View();
        }
        [HttpPost("/Home/Index14")]
        public IActionResult Index14([FromBody] Data1 data1)
        {
            X.datas1.Add(data1);  
            X.SaveChanges();
            return Ok();
        }


        [HttpPost("/Home/Index12")]  
        public IActionResult Index12([FromBody] Data data)
        {
            var existingData1 = X.datas.FirstOrDefault(d => d.account == data.account);
            if (existingData1 != null)
            {
                existingData1.account = data.account;  // 将需要更改的属性值赋给已存在的数据对象
                existingData1.password = data.password;
                X.SaveChanges();
                return Ok();  // 返回成功状态码
            }
           return Conflict(); // 返回状态码 409 表示冲突，即数据库无已经存在相同的数据
        }
        //数据库
        public MyDbcontext X { get; set; }
        public HomeController(MyDbcontext dbcontext)
        {
            X = dbcontext;
        }
        [HttpPost("/api/Index2")]
        public IActionResult Index2([FromBody] Data data)
        {

            // 查询数据库中是否存在相同的数据
            var existingData = X.datas.FirstOrDefault(d => d.account == data.account);
            if (existingData != null)
            {
                return Conflict(); // 返回状态码 409 表示冲突，即数据库中已经存在相同的数据
            }

            X.datas.Add(data);
            X.SaveChanges();
            return Ok();
        }


        [HttpPost("/Home/Index3")]
        public IActionResult Index3([FromBody] Data data)
        {


            if (data == null || string.IsNullOrEmpty(data.account) || string.IsNullOrEmpty(data.password))
            {
                return BadRequest();  // 设置状态码为 400
            }

            // 查询数据库判断账号和密码是否正确，这里假设使用 Entity Framework Core 进行查询：
            var result = X.datas.FirstOrDefault(u => u.account == data.account && u.password == data.password);
            if (result != null)
            {


                return Ok();  // 设置状态码为 200
            }
            else
            {
                return BadRequest();  // 设置状态码为 400
            }
        }


    }

}