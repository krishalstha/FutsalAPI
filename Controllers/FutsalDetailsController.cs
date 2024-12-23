using FutsalAPI.DataContext;
using FutsalAPI.modules;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
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
    public async Task<ActionResult<IEnumerable<FutsalDetail>>> GetFutsalDetails()
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
        _context.FutsalDetail.Add(futsalDetail);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetFutsalDetail", new { id = futsalDetail.FutsalId }, futsalDetail);
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
