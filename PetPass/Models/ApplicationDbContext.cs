using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PetPass.Models;

namespace PetPass.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        { 
        
        }

        public DbSet<Pet> Pets { get; set; }
        public DbSet<Vacina> Vacinas { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

    }
}
