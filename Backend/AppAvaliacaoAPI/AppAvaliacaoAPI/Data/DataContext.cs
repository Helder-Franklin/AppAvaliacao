using AppAvaliacaoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AppAvaliacaoAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options) 
        { }

        public DbSet<Produtos> Produtos => Set<Produtos>(); 
        public DbSet<Categorias> Categorias => Set<Categorias>();
    }
}
