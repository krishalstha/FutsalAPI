using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FutsalAPI.DataContext;
using FutsalAPI.modules;

namespace FutsalAPI.Controllers
{
    [Route("api/FutsalDetails")] // Explicit route to avoid mismatch issues
    [ApiController]
    public class FutsalDetailsController : ControllerBase
    {
        private readonly FutsalDbContext _context;

        public FutsalDetailsController(FutsalDbContext context)
        {
            _context = context;
        }

        // GET: api/FutsalDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FutsalDetail>>> GetFutsalDetail()
        {
            return await _context.FutsalDetail.ToListAsync();
        }

        // GET: api/FutsalDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FutsalDetail>> GetFutsalDetail(int id)
        {
            var futsalDetail = await _context.FutsalDetail.FindAsync(id);

            if (futsalDetail == null)
            {
                return NotFound();
            }

            return futsalDetail;
        }

        // PUT: api/FutsalDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFutsalDetail(int id, FutsalDetail futsalDetail)
        {
            if (id != futsalDetail.FutsalId)
            {
                return BadRequest();
            }

            _context.Entry(futsalDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FutsalDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FutsalDetails
      [HttpPost]
public async Task<ActionResult<FutsalDetail>> PostFutsalDetail(FutsalDetail futsalDetail)
{
    if (futsalDetail == null)
    {
        return BadRequest("Futsal details cannot be null.");
    }

    try
    {
        // Allow manual ID insertion if necessary
        await _context.Database.ExecuteSqlRawAsync("SET IDENTITY_INSERT FutsalDetail ON");

        // Add the futsal detail and save the changes
        _context.FutsalDetail.Add(futsalDetail);
        await _context.SaveChangesAsync();

        // Return the created futsal detail with a 201 status
        return CreatedAtAction(nameof(GetFutsalDetail), new { id = futsalDetail.FutsalId }, futsalDetail);
    }
    catch (Exception ex)
    {
        // Log the exception (you can use a logger here)
        // _logger.LogError(ex, "Error occurred while adding futsal detail.");

        return StatusCode(500, "Internal server error occurred while processing the request.");
    }
    finally
    {
        // Disable IDENTITY_INSERT after inserting
        await _context.Database.ExecuteSqlRawAsync("SET IDENTITY_INSERT FutsalDetail OFF");
    }
}


        // DELETE: api/FutsalDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFutsalDetail(int id)
        {
            var futsalDetail = await _context.FutsalDetail.FindAsync(id);
            if (futsalDetail == null)
            {
                return NotFound();
            }

            _context.FutsalDetail.Remove(futsalDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FutsalDetailExists(int id)
        {
            return _context.FutsalDetail.Any(e => e.FutsalId == id);
        }
    }
}
