using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ControleTarefa.Models;
using ConfigManager = System.Configuration.ConfigurationManager;

class Program
{
    static void Main()
    {
        DateTime dataAtual = DateTime.Now;

        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseSqlServer(ConfigManager.ConnectionStrings["ConnString"].ConnectionString)
            .Options;

        using (var context = new ApplicationDbContext(options))
        {
            var tarefasParaExcluir = context.Tarefas
                .Where(t => t.DataTarefa < dataAtual)
                .ToList();

            context.SaveChanges();
        }
    }
}