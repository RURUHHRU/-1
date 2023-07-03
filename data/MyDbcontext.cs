using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace Web.data
{
    public class MyDbcontext : DbContext
    {
        public MyDbcontext(DbContextOptions<MyDbcontext> options) : base(options) { }

        public DbSet<Data> datas { get; set; }

        public DbSet<Data1> datas1 { get; set; }
    }
}
