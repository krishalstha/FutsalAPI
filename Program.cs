using FutsalAPI.DataContext;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FutsalDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("FutsalConnection"))
);

// Add CORS policy to allow all origins.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Force HTTPS for all requests.
app.UseHttpsRedirection();

// Enable CORS policy.
app.UseCors("AllowAllOrigins");

// Enable routing.
app.UseRouting();

// Add Authorization middleware (if applicable).
app.UseAuthorization();

// Map controllers to handle API requests.
app.MapControllers();

// Redirect root URL to Swagger UI.
app.MapGet("/", async context =>
{
    context.Response.Redirect("/swagger/index.html", permanent: false);
});

app.Run();
