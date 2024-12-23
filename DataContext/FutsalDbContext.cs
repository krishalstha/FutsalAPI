using FutsalAPI.modules;
using Microsoft.EntityFrameworkCore;
using System.Net.Sockets;

namespace FutsalAPI.DataContext
{
    public class FutsalDbContext : DbContext
    {
        public FutsalDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<FutsalDetail> FutsalDetail { get; set; }
    }
}
