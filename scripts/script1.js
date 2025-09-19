
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        alert('Message envoyé avec succès !');
        form.reset();
      } else {
        alert('Erreur lors de l’envoi. Veuillez réessayer.');
      }
    });

