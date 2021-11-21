using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PetPass.Models;

namespace PetPass.Controllers
{
    [Authorize]
    public class VacinasController : Controller
    {
        private readonly ApplicationDbContext _context;

        public VacinasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Vacinas
        public async Task<IActionResult> Index()
        {
            var identifier = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var vacinas = await _context.Pets
                .Where(p => p.UsuarioId.ToString() == identifier)
                .SelectMany(p => p.Vacinas)
                .Include(v => v.Pet)
                .ToListAsync();
            return View(vacinas);
        }

        // GET: Vacinas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vacina = await _context.Vacinas
                .Include(v => v.Pet)
                .FirstOrDefaultAsync(m => m.IdVac == id);
            if (vacina == null)
            {
                return NotFound();
            }

            return View(vacina);
        }

        // GET: Vacinas/Create
        public async Task<IActionResult> Create()
        {
            var identifier = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var pets = await _context.Pets.Where(p => p.UsuarioId.ToString() == identifier).ToListAsync();
            ViewData["PetId"] = new SelectList(pets, "IdPet", "NomePet");
            return View();
        }

        // POST: Vacinas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("IdVac,Animal,Descricao,Idade_Aplicacao,Data_Aplicacao,Dose_Aplicada,PetId")] Vacina vacina)
        {
            if (ModelState.IsValid)
            {
                _context.Add(vacina);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["PetId"] = new SelectList(_context.Pets, "IdPet", "NomePet", vacina.PetId);
            return View(vacina);
        }

        // GET: Vacinas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vacina = await _context.Vacinas.FindAsync(id);
            if (vacina == null)
            {
                return NotFound();
            }
            var identifier = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var pets = await _context.Pets.Where(p => p.UsuarioId.ToString() == identifier).ToListAsync();
            ViewData["PetId"] = new SelectList(pets, "IdPet", "NomePet", vacina.PetId);
            return View(vacina);
        }

        // POST: Vacinas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("IdVac,Animal,Descricao,Idade_Aplicacao,Data_Aplicacao,Dose_Aplicada,PetId")] Vacina vacina)
        {
            if (id != vacina.IdVac)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(vacina);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!VacinaExists(vacina.IdVac))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(vacina);
        }

        // GET: Vacinas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vacina = await _context.Vacinas
                .Include(v => v.Pet)
                .FirstOrDefaultAsync(m => m.IdVac == id);
            if (vacina == null)
            {
                return NotFound();
            }

            return View(vacina);
        }

        // POST: Vacinas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var vacina = await _context.Vacinas.FindAsync(id);
            _context.Vacinas.Remove(vacina);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool VacinaExists(int id)
        {
            return _context.Vacinas.Any(e => e.IdVac == id);
        }
    }
}
